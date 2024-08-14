import { Skeleton } from "antd";
const TabSkeleton = () => {
  return (
    <>
      <div className="flex justify-center">
        <Skeleton active />
      </div>
    </>
  );
};

export default TabSkeleton;
