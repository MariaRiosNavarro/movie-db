/* eslint-disable react/prop-types */
import "./Star.scss";

const Star = ({ rate }) => {
  const stars = [];

  for (let i = 1; i <= 10; i++) {
    if (i <= rate) {
      stars.push(<img key={i} src="/stars/full.png" alt={`Full Star ${i}`} />);
    } else {
      stars.push(
        <img key={i} src="/stars/empty.png" alt={`Empty Star ${i}`} />
      );
    }
  }

  return (
    <>
      <div className="stars">{stars}</div>
    </>
  );
};

export default Star;
