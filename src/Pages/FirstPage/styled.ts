import styled from 'styled-components'
import Theme from '../../Theme'

export const container = styled.div`
    display: flex;

    .sidebar{
      animation: slideOut 0.9s backwards;

      @keyframes slideOut{
        100%{
          margin-left: 0;
        }
        0%{
          margin-left: -25%;
        }
      }

    }


`
export const content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center;
    position: relative;
    margin: 0 auto;

    @media (min-width: ${Theme.Devices.Mobile}px) {
    text-align: none;
  }
`