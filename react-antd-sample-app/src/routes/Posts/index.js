import React from 'react';
import moment from 'moment';
import { useDispatch,useSelector} from 'react-redux';
import {Row,Col,PageHeader,Table,Button } from "antd";
import * as postActions from '../../store/posts/actions'

	
const Post =()=>{
const dispatch= useDispatch();
const counter = useSelector(state => state.postsReducer.collection)
const onDelete=async(e,id)=>{dispatch(postActions.deleteOneDocument(id))}
React.useEffect(async () => {dispatch(postActions.fetchPost())},[]);

	const columns = [
		{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name',
		 },
		{
		  title: 'Effective Date',
		  dataIndex: 'effectiveDate',
		  key: 'effectiveDate',
		},
		{
		  title: 'Expiry Date',
		  dataIndex: 'expiryDate',
		  key: 'expiryDate',
		  render:(text,record)=>(
			counter.map((e)=>{
				if(e._id===record._id){
				
					if(record.expiryDate===null){
						return(
							<span>expiray date is  null</span>
						)
					}
					else{
						return(<span>{moment(e.expiryDate).format('DD-MM-YYYY')}</span>)
					}
				}
				
			})  
		  )
		},
		
		{
		  title: 'Status',
		  key: 'status',
		  render: (text, record) => (
			<div size="middle">
			{counter.map((e)=>{
				if(record._id===e._id){
					if(e.activeIndicator===true&&e.expiryDate===null){
						return(<span style={{color:"green"}}>Active</span>)
					}
					else if(e.activeIndicator===true && moment(e.expiryDate).format('DD-MM-YYYY')===moment(Date.now()).format('DD-MM-YYYY')){
						return(<span style={{color:"grey"}}>Expire</span>)
					}
					else{
						return(<span style={{color:"red"}}>Deleted</span>)	
					}
				}
			})}
			 
			</div>
		  ),
		},
		{
				title: 'Action',
				dataIndex: 'action',
				key: '_id',
				render:(text,record)=>(
					<div>
						{counter.map(e=>{
							if(e._id===record._id){
								//const id=record._id;
								return(
									<a onClick={(e,id=record._id)=>onDelete(e,id)}>Delete</a>
								)
							}
						})}
						
					</div>
				)
			  },
		

	  ];
	  
	 


	  const generateData=async(e,name)=>{
		  if (name==="generate"){ dispatch(postActions.postCollection()) }
		  else if(name==="delete"){
			  dispatch(postActions.deleteCollection())
			 }
		  

	  }
	const  expireData =async(e,name)=>{dispatch(postActions.expiredActiveCollection())}
	      return(
                   <React.Fragment>
                   <PageHeader
						style={{margin: '16px 0'}}
						title="List"
 						subTitle="Get a chance to view your List"
					/>
					<Row style={{paddingBottom:"20px"}} >
					     <Col span={4} push={21}>
							<Button type="danger" onClick={(e,name="delete")=>generateData(e,name)}>Delete Data</Button>
							</Col>
							
							<Col span={4} push={14}>
							<Button type="primary" onClick={(e,name="generate")=>generateData(e,name)}>Generate Data</Button>
							</Col>
							<Col span={4}push={6}>
							<Button onClick={(e,name="expired")=>expireData(e,name)} > Expired Active Row</Button>
							</Col>
							</Row>
						<Row>
							
						</Row>
					<div style={{background: '#fff', padding: 24, minHeight: 280}}>
						
					<Row>
						
						<Col>
						<Table columns={columns} dataSource={counter} />
						</Col>
					</Row>
					</div>
                    </React.Fragment>
	)
}

export default Post;