'use client';

import useSWR from 'swr';
import OSS from 'ali-oss';
import MD5 from 'crypto-js/md5';
import encLATIN1 from 'crypto-js/enc-latin1';
import encHEX from 'crypto-js/enc-hex';
import { useEffect, useState } from 'react';
import { envBrowser } from '@/env.browser';
import ImageOSS from '../ImageOSS';
import {
  ImageList, ImageListItem, Unstable_Grid2 as Grid, Button, ImageListItemBar,
  IconButton, Modal, ModalProps, Paper, useMediaQuery, useTheme,
} from '@/mui/material';
import { Delete } from '@/mui/icons-material';

const fetcher = (url:string) => fetch(url, { method: 'POST' }).then((res) => res.json()).then((res) => { console.log(res); return res; });
export interface GalleryProps extends Omit<ModalProps, 'children'> {
}

export default function Gallery(props: GalleryProps) {
  const { ...modalProps } = props;
  const { data: { credentials: { accessKeyId, accessKeySecret, securityToken } } } = useSWR('/api/oss/sts', fetcher, { focusThrottleInterval: 1000 * 6, suspense: true });
  const [client, setClient] = useState<OSS>();
  const [list, setList] = useState<any[]>([]);
  const theme = useTheme();
  const matcheUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matcheUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matcheUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const OSSClient = new OSS({
      accessKeyId,
      accessKeySecret,
      stsToken: securityToken,
      // region表示您申请OSS服务所在的地域，例如oss-cn-hangzhou。
      region: `oss-${envBrowser.ossLocaltion}`,
      bucket: envBrowser.ossBucket,
    });
    setClient(OSSClient);
    OSSClient.listV2({}, {}).then((res) => {
      setList(res.objects.map((file) => ({
        name: file.name,
        url: file.url,
      })));
    });
  }, [accessKeyId, accessKeySecret, securityToken]);

  const upload = (files: FileList | null) => {
    if (files) {
      [...files].forEach((file) => {
        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
          const result = e.target?.result;
          if (!result) {
            return;
          }
          const hash = MD5(encLATIN1.parse(result as string));
          let md5 = hash.toString(encHEX);
          const { name } = file;
          const matchs = name.match(/\.\w+$/);
          if (matchs) {
            md5 += matchs[0];
          }
          const headers = {
            'Content-Disposition': name,
            'x-oss-forbid-overwrite': 'true',
          };
          client?.put(md5, file, { headers });
        });
        reader.readAsBinaryString(file);
      });
    }
  };

  const deleteItem = async (name: string) => {
    await client?.delete(name);
  };

  const getCols = () => {
    if (matcheUpLg) return 5;
    if (matcheUpMd) return 4;
    if (matcheUpSm) return 3;
    return 2;
  };

  return (
    <Modal {...modalProps}>
      <Paper sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90vw', sm: '80vw', md: '60vw' },
        minHeight: '50vh',
        p: 2,
      }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sx={{ textAlign: 'right' }}>
            <Button component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={(e) => upload(e.target.files)} />
            </Button>
          </Grid>
          <Grid xs={12}>
            <ImageList cols={getCols()}>
              {list.map((item) => (
                <ImageListItem key={item.name}>
                  <ImageOSS name={item.name} process="resize,w_164,h_164/quality,q_75" alt={item.name} />
                  <ImageListItemBar
                    sx={{
                      background: 'rgba(0,0,0,0)',
                    }}
                    position="top"
                    actionIcon={(
                      <IconButton
                        sx={{ color: 'white', background: 'rgba(0,0,0,0.5)' }}
                        aria-label={`delete ${item.name}`}
                        onClick={() => deleteItem(item.name)}
                      >
                        <Delete />
                      </IconButton>
                    )}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}
