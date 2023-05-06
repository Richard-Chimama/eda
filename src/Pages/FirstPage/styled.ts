import styled from 'styled-components'
import Theme from '../../Theme'

export const container = styled.div`

`
export const content = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;
    text-align: center;

    @media (min-width: ${Theme.Devices.Mobile}px) {
    width: 80%;
    text-align: none;
  }
`