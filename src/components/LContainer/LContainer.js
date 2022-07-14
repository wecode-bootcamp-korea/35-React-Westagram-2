import LCarosel from '../LCarosel/LCarosel';
import LContents from '../LContents/LContents';

function LContainer() {
  return (
    <div className="LeftPanel">
      <LCarosel />
      <LContents />
      <LContents />
      <LContents />
      <LContents />
    </div>
  );
}

export default LContainer;
