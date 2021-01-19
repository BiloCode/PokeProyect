import { FC } from "react";
import { CgPokemon } from 'react-icons/cg';
import { RouteComponentProps } from "@reach/router";
import "./index.scss";

import RootLayout from "components/layouts/RootLayout";
import Title from "components/common/Title/PokeTitle";
import DarkBackgroundLayout from "components/layouts/DarkBackgroundLayout";
import TeamCard from "components/common/TeamCard";
import Button from "components/common/Button";

const Home : FC<RouteComponentProps> = () => (
  <RootLayout>
    <DarkBackgroundLayout>
      <Title icon={<CgPokemon />} text="Pokepedia" />
      <div className="team-card-list">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <Button text='Ver todos los equipos' />
    </DarkBackgroundLayout>
  </RootLayout>
);

export default Home;