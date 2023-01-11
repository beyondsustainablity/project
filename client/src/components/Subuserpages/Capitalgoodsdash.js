import { useCallback ,useEffect,useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home1View.css";
import { LoginContext } from "../ContextProvider/Context";
import DatePicker from 'react-date-picker';
import Header from './Header';
const Home1View = () => {
    const [value, onChange] = useState(new Date());
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  
  let he="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.map)}

asuser();

  const navigate = useNavigate();

  const onAddDataClick = useCallback(() => {
    navigate("/subfug");
  }, [navigate]);
  const hellos =async(e)=>{
    const map=he
        const datap = await fetch("/capdash", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
               map
          })
      });
      const res = await datap.json();
      
      setTodoss(res);
      }
      let element=0;
  for (let index = 0; index < usrs.length; index++) {


    element += (usrs[index].co2)
  
 }
 useEffect(() => {
 
  hellos();
setCalculation(() => count * 2);
}, [count]);
let i=0;

  return (
    <div className="home1-view">
      
      <img className="home1-view-child" alt="" src="../vector-4.svg" />
      <img className="home1-view-item" alt="" src="../vector-4.svg" />
      <div className="home1-view-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
     <div className="ellipse-icon">  <Header/></div>
      <img className="home1-view-child1" alt="" src="../ellipse-56.svg" />
      <img className="vector-icon" alt="" src="../vector-1.svg" />
      <img className="home1-view-child2" alt="" src="../vector-2.svg" />
      <div className="rectangle-div" />
      <img className="rectangle-icon" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child3" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child4" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child5" alt="" src="../rectangle-52@2x.png" />
      <Link to="/subdash">
         <a className="scope-1">Scope 1</a>
        </Link>
        <Link to="/subsco">
        <a className="scope-2">Scope 2</a>
        </Link>
        <Link to="/subcapital">
        <a className="scope-32">Scope 3</a>
        </Link>
         <section className="rectangle-section" />
         <Link to="/subcapital">
         <section className="rectangle-section" />
         <a className="stationary-c2"> Capital Goods</a>
         </Link>
         <Link to="/subfranchise">
         <a className="mobile-combustion">
           <p className="mobile1">{`Franchise `}</p>
           <p className="combustion1"></p>
         </a>
         </Link>
         <Link to="/subupstream">
         <a className="fugitive-emissions">
           <p className="mobile">{`Upstream `}</p>
           <p className="combustion"></p>
         </a>
         </Link>    
              <Link to="/subdownstream">

         <a className="process-emissions">
           <p className="mobile">{`Downstream `}</p>
    
         </a></Link>
      <div className="di">{Math.round(element)}</div>
      <p className="p">{Math.round(element)}</p>
      <p className="tonnes-of-co2eq">Tonnes of CO2eq</p>
      <div className="home1-view-child6" />
      <div className="line-div" />
      <div className="home1-view-child7" />
      <div className="home1-view-child8" />
      <div className="home1-view-child9" />
      <div className="home1-view-child10" />
      <div className="home1-view-child11" />
      <div className="home1-view-child12" />
      <div className="home1-view-child13" />

    
      <div className="home1-view-child14" />
      <div className="home1-view-child15" />
      <div className="home1-view-child16" />
      <div className="home1-view-child17" />
      <p className="total-em">Total Emissions</p>
      <p className="tonnes-of-co2eq1">Tonnes of CO2eq</p>
      <p className="total-composition-of-carbon-fo">{`Total Composition of Carbon Footprint by Source of Emission `}</p>
      <a className="add-data" onClick={onAddDataClick}>
        Add Data
      </a>
      <img
        className="factory-pollution-city-air-and-icon"
        alt=""
        src="../117785factorypollutioncityairandwater-1@2x.png"
      />
      <Link className="measure" to="/home1add">
        Measure
      </Link>
      <Link className="reduce" to="/home1add">
        Reduce
      </Link>
      <Link className="offset" to="/home1add">
        Offset
      </Link>
      <Link className="dashboard" to="/home1add">
        Dashboard
      </Link>
      <table class="down4">

<thead>
  <tr>
    <th>S.NO</th>
    <th>Facility code</th>
    <th>buyername</th>
    <th>buyer location</th>
    <th>Facility Name:</th>
    <th> mode of transport</th>
    <th>type of vehicle</th>
    <th>distance travelled </th>
    <th>material</th>
    <th>quantity</th>
    
    
    <th>vehicle distance</th>
    <th>mode of transport:</th>
    <th>type of vehicle</th>
    <th>Location</th>
    <th>size of building</th>
    <th>Energy consumption in kw</th>
    <th>date</th>

  </tr>
</thead>




      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="1">{i=i+1}</td>
        <td  key="2">{todo.code}</td>
        <td  key="3">{todo.byername}</td>
        <td  key="4">{todo.byerlocation}</td>
        <td  key="5">{todo.facility}</td>
        <td  key="6">{todo.transport}</td>
        <td  key="7">{todo.vehicle}</td>
        <td  key="8">{todo.distance}</td>
        <td  key="9">{todo.material}</td>
        <td  key="10">{todo.quantity}</td>
        

        <td  key="11">{todo.quantity2}</td>
        <td  key="12">{todo.transport2}</td>
        <td  key="13">{todo.vehicle2}</td>
        <td  key="14">{todo.employeecode}</td>
        <td  key="15">{todo.employeename}</td>
        <td  key="16">{todo.energy}</td>
        <td  key="17">{todo.date}</td>
    
    
        </tr>
        )) : (
          <p>You have no data</p>
        )}
      </tbody>


      
    

</table>


    </div>
  );
};

export default Home1View;