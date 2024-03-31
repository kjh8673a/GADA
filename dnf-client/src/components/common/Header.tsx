import { Domain, DownConatiner, UpContainer, PageHeader, DomainLogo } from "../../style/header";

const Header = () => {

  return (
    <>
      <UpContainer>
        <Domain
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <DomainLogo src={`${process.env.PUBLIC_URL}/assets/gadalogo.webp`} alt="site logo" />
        </Domain>
      </UpContainer>
      <DownConatiner>
        <PageHeader href="/">메인</PageHeader>
      </DownConatiner>
    </>
  );
};

export default Header;