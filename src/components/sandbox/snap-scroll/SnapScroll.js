import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  height: calc(100vh - 200px);
  border: 1px solid #596171;
  margin: 20px 0;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`
const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px; 
    background-color: #98C1D9;
    color: white;
    font-size: 78px;
    border-bottom: 1px solid #596171;
    scroll-snap-align: start;
`

const SnapScroll = () => (
  <Container>
    {Array.from({ length: 10 }, (_, i) => i).map(v => <Section key={v}>{v + 1}</Section>)}
  </Container>
)

export default SnapScroll
