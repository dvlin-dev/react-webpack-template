import styles from './index.module.scss';
import { Button } from 'antd';

function Index() {
  return (
    <div className={styles.vTestIndex}>
      <div>
        <Button color="primary">去首页</Button>
      </div>
    </div>
  );
}

export default Index;
