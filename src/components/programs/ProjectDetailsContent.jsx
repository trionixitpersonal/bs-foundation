import { Link } from 'react-router';
import ProjectDetailsPagination from './ProjectDetailsPagination';

function ProjectDetailsContent() {
  return (
    <section className="project-details">
      <div className="container">
        <div className="project-details__img">
          <img
            src="/assets/images/project/project-details-img-1.jpg"
            alt="#"
          />
          <div className="project-details__info-box">
            <div className="project-details__info-title-box">
              <h3 className="project-details__info-title">Program Details</h3>
            </div>
            <div className="project-details__info-and-social">
              <div className="project-details__info">
                <ul className="project-details__info-list list-unstyled">
                  <li>
                    <p>
                      Name:<span>Water fundation</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Author:<span>Rajin Saleh</span>
                    </p>
                  </li>
                </ul>
                <ul className="project-details__info-list list-unstyled">
                  <li>
                    <p>
                      Date:<span>23 December,2023</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Tags:<span>Water For All</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="project-details__social">
                <a href="#">
                  <span className="icon-instagram"></span>
                </a>
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="project-details__left">
              <h3 className="project-details__title-1">
                Supporting Health Initiatives
              </h3>
              <p className="project-details__text-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galltype and scrambled it to make a type specimen book. It has
                survived not only five centuries tinto electronic typesetting
                remaining essentially unchanged
              </p>
              <p className="project-details__text-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown print
              </p>
              <ul className="project-details__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-right-arrow"></span>
                  </div>
                  <p>Hope Restoration</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-right-arrow"></span>
                  </div>
                  <p>Giving Back</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-right-arrow"></span>
                  </div>
                  <p>Positive Impact</p>
                </li>
              </ul>
              <h3 className="project-details__title-2">
                Elevate Your Business with IT Solutions
              </h3>
              <p className="project-details__text-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galltype and scrambled it to make a type specimen book. It has
                survived not only five centuries tinto electronic typesetting
                remaining essentially unchanged
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="project-details__right">
              <div className="project-details__right-img-1">
                <img
                  src="/assets/images/projects/project-7.jpg"
                  alt=""
                />
              </div>
              <div className="project-details__right-img-2">
                <img
                  src="public/assets/images/projects/project-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <ProjectDetailsPagination />
      </div>
    </section>
  );
}

export default ProjectDetailsContent;
