import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'; // Empty stars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface Skill {
  name: string;
  rating: number;
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={i < rating ? faStar : faStarRegular} />
    );
  }
  return stars;
};



const skeleton = ({ widthCls, heightCls, className }: { widthCls: string; heightCls: string; className: string }) => (
  <div className={`${widthCls} ${heightCls} ${className}`} />
);

const renderSkeleton = () => {
  const array = [];
  for (let index = 0; index < 12; index++) {
    array.push(
      <div key={index}>
        {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
      </div>,
    );
  }
  return array;
};

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: Skill[];
}) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      {loading ? renderSkeleton() : (
        <div className="grid grid-cols-2 gap-4 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="font-semibold text-base-content opacity-70">{skill.name}</span>
              <div className='text-base-content text-opacity-60'>{renderStars(skill.rating)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;

