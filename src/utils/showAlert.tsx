import Alert from '@/component/Alert';
import { createPortal } from 'react-dom';

export default function showAlert(props: ) {

  return createPortal(
    <Alert />,
    document.body,
  );
}
