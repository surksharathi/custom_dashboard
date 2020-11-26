

import React from 'react';
import {PageHeader,Row,Col } from "antd";
import {PieChart, Pie,  Tooltip } from 'recharts';
import {useSelector,useDispatch} from 'react-redux';
import * as postActions from '../../store/posts/actions';

  const Gallery=()=>{
	const dispatch=useDispatch();
	const counter = useSelector(state => state.postsReducer.collection);
	React.useEffect(() => {dispatch(postActions.fetchPost())},[]);
    const[data1,setData]=React.useState([]);
	 
	React.useEffect(()=>{
    if(counter.length!==0){
		const activeIndicatorTrue=  counter.filter((e)=>{
			if(e.activeIndicator===true)
			return e;
		});
		const activeIndicatorFalse=  counter.filter((e)=>{
			if(e.activeIndicator===false)
			return e;
		});
		const filteredData=[];
	  filteredData.push({name:"Active Indicator True",value:activeIndicatorTrue.length},
		{name:"Active Indicator False",value:activeIndicatorFalse.length});
	   setData(filteredData)
	}
	},[counter]);
	return(
		<div>
			{console.log("data value",data1)}
			<PageHeader
				style={{margin: '16px 0'}}
					title="Analytics"
 					subTitle="Get a chance to see your Analytics"
				/>
				<Row justify="center">
					<Col span={24}>
				<PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={data1} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
              </PieChart>
			  </Col>
				</Row>
		</div>
	)
}
export default Gallery;