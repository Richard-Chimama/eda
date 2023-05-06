import styled from 'styled-components'
import Theme from '../../Theme'

export const container = styled.div`

`
export const content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 4rem;
    text-align: center;

    @media (min-width: ${Theme.Devices.Mobile}px) {
    text-align: none;
  }
`