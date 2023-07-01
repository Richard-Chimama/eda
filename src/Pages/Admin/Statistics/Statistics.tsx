import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import API from '../../../API'
import MonthlyStatistic from './Charts/MonthlyStatistic'
import TotalPatients from './Charts/TotalPatients'
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Statistics = () => {
    const hospitalId = localStorage.getItem('hospitalID')
    const [results, setResults] = useState<any>(null)
    const [maleCount, setMaleCount] = useState<number>(0)
    const [femaleCount, setFemaleCount] = useState<number>(0)
    const [months, setMonths] = useState({})

    const {loading, error, data} = useQuery(API.Queries.findPatientsByHosptial,
            {variables:{hospitalId:hospitalId}})
            
    useEffect(() =>{
        if(!loading && !error && data){
            setResults(data.patientByHospital)
            console.log(data)
        }
    },[loading, error, data])   
    
   
    useEffect(() => {
        if (results) {
          let male = 0;
          let female = 0;
          results.forEach((item:any) => {
            if (item.gender === 'M') {
              male = male + 1;
            } else {
              female = female + 1;
            }
          });
    
          setMaleCount(male);
          setFemaleCount(female);
        }
      }, [results]);

      useEffect(()=>{
        if(results){
            const {dateCount, monthCount, yearCount} = timestampStatistics(results)
            console.log("dates",dateCount)
            console.log("months", monthCount)
            console.log("years",yearCount)
            setMonths(monthCount)
        }
      },[results])


      function timestampStatistics(data:any) {
        const dateCount:any = {};
        const monthCount:any = {};
        const yearCount:any = {};
      
        data.forEach((timestamp:any) => {
          const date = new Date(timestamp.createdAt);
          const day = date.getDate();
          const month = date.getMonth() + 1; // Adding 1 since months are zero-indexed
          const year = date.getFullYear();
      
          dateCount[day] = (dateCount[day] || 0) + 1;
          monthCount[month] = (monthCount[month] || 0) + 1;
          yearCount[year] = (yearCount[year] || 0) + 1;
        });
      
        return { dateCount, monthCount, yearCount };
      }
    
 
 

  return (
    <Container className="container">
      <h1>Repports</h1>
      {results && (
      <Rows>
        <Col>
        <div>
            <p>Total number of patient: {results?.length}</p>
          </div>

          <div>
            <TotalPatients 
                data={[
                    {x:`${maleCount} M`,y:maleCount},
                    {x:`${femaleCount} F`, y:femaleCount}
                ]}
                />
          </div>
        </Col>
        <Col >
        <div>
              
            <MonthlyStatistic obj={months} />
          </div>
        </Col>
      </Rows>
      )}
      
    </Container>
  );
}

const Container = styled.div`
    min-height: 100vh;
    padding-inline: 1rem;
    padding-bottom: 5rem;
    
`

const Rows = styled.div`
  display:flex;
  padding-inline: 1rem;
  gap: 1rem;

  @media (max-width: 450px){
    flex-direction: column;

  }
`

export default Statistics