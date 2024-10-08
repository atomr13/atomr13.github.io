import { faStar, faStarHalfAlt, faStarOutline } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStarOutline} />);
    }
  }
  return stars;
};

const SkillCard = ({ loading, skills }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap justify-center">
            {loading
              ? renderSkeleton()
              : skills.map((skill, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    <span>{skill.name}</span> 
                    <div className="ml-2">
                      {renderStars(skill.rating)}
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
