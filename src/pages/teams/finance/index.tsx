import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const FinanceTeam: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Finance Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Finance Team - Hyonjoon Park ",
    content:
      "Hey there :) This is Hyonjoon, a junior year student attending School of International Liberal Studies (SILS), Waseda University. It is my absolute honor to introduce to you our GDSC Waseda Finance Team as this year's newly appointed team lead.",
    image: "finance_lead.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Lahiru",
      image: "frontend_lead.png",
      major: "Computer Science",
      school: "FSE",
      year: "4th year",
    },
    {
      title: "Tazkya",
      image: "frontend_lead.png",
      major: "Physics",
      school: "ASE",
      year: "2nd year",
    },
    {
      title: "Haru",
      image: "lead.png",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    // {
    //   title: "Gun",
    //   image: "frontend_lead.png",
    //   major: "Civil Eng",
    //   school: "CSE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Bea",
    //   image: "finance_lead.png",
    //   major: "Politics and Econ",
    //   school: "PSE",
    //   year: "3rd year",
    // },
    // {
    //   title: "Leeroy",
    //   image: "finance_lead.png",
    //   major: "Politics and Econ",
    //   school: "PSE",
    //   year: "3rd year",
    // },
  ];

  return (
    <div className="team-page">
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="team"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <div className="header-padding">
        <HeaderCard props={card} />
      </div>
      <ImageCard props={imageCardProps} />
      <h1 className="members-title">Meet Our Team</h1>
      <div className="team-cards-container">
        {teamCards.map((teamCard, index) => (
          <TeamCard key={index} props={teamCard} />
        ))}
      </div>
    </div>
  );
};

export default FinanceTeam;