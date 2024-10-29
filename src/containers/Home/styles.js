import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 160px;
    padding: 20px;

    h1 {
        margin-top: 12px;
        color: #fff;
        font-size: 50px;
        font-style: inherit;
        text-align: center;
    }

    p { 
        margin-top: 30px;
        color: #fff;
        font-size: 25px;
        font-weight: bold;
        text-align: center;
    }

    h3 {
        margin-top: 30px;
        color: #fff;
        font-size: 25px;
        text-align: center;
    }

    h4 {
        margin-top: 30px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        margin-top: 100px;

        h1 {
            font-size: 35px;
        }

        p {
            font-size: 20px;
        }

        h3 {
            font-size: 22px;
        }

        h4 {
            font-size: 18px;
        }
    }

    @media (max-width: 480px) {
        margin-top: 80px;

        h1 {
            font-size: 28px;
        }

        p {
            font-size: 18px;
        }

        h3 {
            font-size: 20px;
        }

        h4 {
            font-size: 16px;
            line-height: 1.4;
        }
    }
`
