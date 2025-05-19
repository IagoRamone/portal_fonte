import React from 'react';

const Heading: React.FC = () => {
  return (
    <div className="text-[rgb(0,64,112)] space-y-2">
      <h1 className="text-5xl font-bold">Heading 1</h1>
      <h2 className="text-4xl font-bold">Heading 2</h2>
      <h3 className="text-3xl font-semibold">Heading 3</h3>
      <h4 className="text-2xl font-medium">Heading 4</h4>
      <h5 className="text-xl font-medium">Heading 5</h5>
      <h6 className="text-lg font-normal">Heading 6</h6>
    </div>
  );
};

export default Heading;