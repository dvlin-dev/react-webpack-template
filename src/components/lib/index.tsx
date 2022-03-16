import { Spin, Typography } from 'antd';

export function FullPageLoading() {
  return (
    // eslint-disable-next-line
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
}

// TODO 怎么防止闪烁
export function FullPageErrorFallback({ error }: { error: any }) {
  return (
    <div className="FullPage">
      <Typography.Text type="danger">{error?.message}</Typography.Text>
    </div>
  );
}
