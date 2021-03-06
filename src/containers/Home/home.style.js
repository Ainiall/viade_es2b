import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-image: url("./img/concentric-hex-pattern_2x.png");
  background-repeat: repeat;
  display: flex;
`;

export const HomeBody = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width:100%;
  height:100%;
`;

export const HomeCard = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 95%;
  margin: 2% auto;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RouteMap = styled.div`
  height: 300px;
  margin: 2%;
  line-height: 300px;
  text-align: center;
  width:95%;
  .leaflet-container {
    height: 300px;
    width: 100%;
  }
  z-index: 0;
`;

export const RouteInfo = styled.div`
  margin: 2%;
  width:95%;
`;

export const RouteHead = styled.div`
  margin-bottom: 100px;
 
  h2 {
    float: left;
    width: 50%
  }

  #share {
    float: right;
    width: 50%
  }
`;

export const CenteredDiv = styled.div`
  padding: 5%;
  bottom: 0;
  display:inline-block;
  text-align: center;
`;