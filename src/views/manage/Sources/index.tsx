import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useForm } from 'react-hook-form';
import { Message } from 'google-protobuf';
import {
  Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useGrpcRequest } from '../../../hooks/grpcRequest';
import { useClientNews, useClientSources } from '../../../hooks/clients';
import { SourcesItem } from '../../../proto/manage/sources_pb';

const SourceItem:FC<{ items: SourcesItem.AsObject[] }> = ({ items }) => (
  <>
    {items.map((item) => (
      <TreeItem key={item.id} nodeId={String(item.id)} label={item.name}>
        <SourceItem items={item.childrenList} />
      </TreeItem>
    ))}
  </>
);

type SourcesItemSelf = Omit<SourcesItem.AsObject, 'childrenList'>;

const Sources:FC = () => {
  const [open, setOpen] = useState(false);
  const [sources, setSources] = useState<SourcesItem.AsObject[]>([]);
  const { loading, run } = useGrpcRequest(useClientSources('create'));
  const param = new SourcesItem();
  param.setId(7);
  const { data } = useGrpcRequest(useClientSources('list'), param);
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<SourcesItemSelf>({
    defaultValues: {

    },
  });
  const onSubmit = (value: SourcesItemSelf) => {
    console.log(value);
    const params = new SourcesItem();
    params.setSourcesItemid(7);
    params.setName(value.name);
    params.setKey(value.key);
    params.setType(value.type);
    params.setPath(value.path);
    params.setIndex(value.index);
    params.setMenu(value.menu);
    params.setIcon(value.icon);
    params.setDesc(value.desc);
    run(params);
  };
  console.log(123333, data?.toObject().listList);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        新建
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiTextField-root, & .MuiFormControl-root': { m: 1, width: '25ch' },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              label="名字"
              {...register('name')}
            />
            <TextField
              label="唯一Key"
              {...register('key')}
            />
            <TextField
              select
              label="类型"
              defaultValue={SourcesItem.Type.API}
              {...register('type')}
            >
              {Object.entries(SourcesItem.Type as any).map(([k, v]) => (
                <MenuItem key={k} value={v as number}>{k}</MenuItem>
              ))}
            </TextField>
            <TextField
              label="路径"
              {...register('path')}
            />
            <FormControl>
              <FormControlLabel
                control={(
                  <Checkbox
                    defaultChecked
                    {...register('index')}
                  />
                )}
                label="是否默认"
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                control={(
                  <Checkbox
                    {...register('menu')}
                  />
                )}
                label="是否菜单"
              />
            </FormControl>
            <TextField
              label="图标"
              {...register('icon')}
            />
            <TextField
              label="描述"
              {...register('desc')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <LoadingButton loading={loading} type="submit">保存</LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto',
        }}
      >
        <SourceItem items={data?.toObject().listList || []} />
      </TreeView>
    </div>
  );
};
export default Sources;
