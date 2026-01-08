function ProgressBar({ progress = 75 }) {
  return (
    <div className="progress-levels">
      {/* Skill Box */}
      <div className="progress-box">
        <div className="inner count-box">
          <div className="bar">
            <div className="bar-innner">
              <div className="skill-percent">
                <span
                  className="count-text"
                  data-speed="3000"
                  data-stop={progress}
                >
                  0
                </span>
                <span className="percent">%</span>
                <div className="courses-three__progress-shape-1">
                  <img
                    src="/assets/images/shapes/courses-three-progress-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="progress-box__progress-shape-2">
                  <img
                    src="/assets/images/shapes/courses-three-progress-shape-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="bar-fill" data-percent={progress}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
