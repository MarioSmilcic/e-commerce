import "./about.style.css";

const About = () => {
  return (
    <div className="about">
      <div className="about_info">
        <div className="about_info__left">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            incidunt rem asperiores laudantium, iusto totam cumque commodi illum
            doloribus sed.
          </p>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/6348398d9d21fd6277c64f96/53d406e4-1a68-4d93-9f82-0ea6c809b2bf/hackman+team+factors+article.png"
          // src="https://assets-global.website-files.com/5e6aa7798a5728055c457ebb/64e3afacb378f2e8a0f70cd8_20230821T0632-63fa87c1-4382-4830-a8fb-6ec599549477.jpeg"

          // src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/13204533/Teamwork.png"
          // src="https://d.newsweek.com/en/full/2282869/figures-teamwork-brainstorming.jpg?w=1200&f=8c555098acf085f0a9695ae6a5e15c91"
          // src="https://instandart.com/wp-content/uploads/2024/01/team-building.jpeg"
          alt="team"
          className="about_info__right"
        />
      </div>
      <div className="about_mission">
        <img
          src="https://parade.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3NTIwNTA5NTU3MDI0NjY3/team-building-activities.jpg"
          alt="mission"
          className="about_mission__left"
        />
        <div className="about_mission__right">
          <h2>Our Mission: Helping Millions of Organizations Grow Better</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, ducimus obcaecati ipsa rem eaque nesciunt veritatis
            atque consequatur sed amet!
          </p>
        </div>
      </div>
      <div className="about_story">
        <div className="about_story__left">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            illum repellendus. Repudiandae, a nesciunt illum ipsam nulla quaerat
            fuga, voluptatem nemo tenetur corrupti non amet doloremque
            asperiores delectus libero hic.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aspernatur molestiae officiis aut eaque minus, sit iusto non
            asperiores laborum sint sequi totam, ullam pariatur velit rerum
            optio fugit deleniti.
          </p>
        </div>
        <img
          src="https://www.realityhr.co.uk/wp-content/uploads/Reality-HR-team-building.png"
          // src="https://reputationtoday.in/wp-content/uploads/2020/06/Team-Work-Problems-Inlea-e1504472827418-624x437.jpg"
          alt="story"
          className="about_story__right"
        />
      </div>
    </div>
  );
};

export default About;
