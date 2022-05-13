import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../contexts/UserContext";

export default function ItemList(props) {
  const { produto, setProduto, userInfo } = useUser();
  const navigate = useNavigate();

  return (
    <Produto
      onClick={() => {
        setProduto({ ...props });
        navigate(`/produto`);
      }}
    >
      <img src={props.img} />
      {props.sale ? <div className="sale">LANÇAMENTO</div> : <></>}
      <div className="info">
        <h4>{props.name}</h4>
        <h5>
          {props.sale ? (
            <>
              <span>{"R$" + props.price.toFixed(2)}</span>
              {"R$" + props.sale.toFixed(2)}
            </>
          ) : (
            <>{"R$" + props.price.toFixed(2)}</>
          )}
        </h5>

        <h6>
          Até {props.parcel}x de R$
          {((props.sale ? props.sale : props.price) / props.parcel).toFixed(
            2
          )}{" "}
          sem juros
        </h6>
        {!props.sale ? <div className="space"></div> : <></>}
      </div>
    </Produto>
  );
}

const Produto = styled.div`
  height: auto;
  width: 48%;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  border-radius: 10px;
  /* background-color: #ffff00; */
  box-shadow: var(--shadow);

  img {
    height: auto;
    width: 100%;
    padding: 0 18%;
  }

  .info {
    height: auto;
    width: 100%;
    padding: 0 10px;
  }

  .sale {
    height: 30px;
    width: 100%;
    background-color: var(--purple);
    color: var(--white);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .space {
    height: 40px;
    width: 100%;
  }

  h4 {
    height: 40px;
    font-size: 12px;
    font-weight: 400;
    color: var(--greyDark);
    margin-bottom: 10px;
  }
  
  h5 {
    font-size: 14px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 10px;
  }
  
  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey);
    margin-right: 10px;
    text-decoration: line-through;
  }
  
  h6 {
    height: 20px;
    font-size: 10px;
    font-weight: 400;
    color: var(--greyDark);
    margin-bottom: 15px;
  }
`;
