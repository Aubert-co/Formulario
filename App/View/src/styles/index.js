import styles from 'styled-components'


const Div = styles.div`
    height:100vh;
    display:flex;
    flex-direction: column;
    background:rgb(34, 150, 185);
    ;

    header{
        height:10%
    }
    main{
        height:80%;
    }
    .login{
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .item{
        width:25%;
        height:70%;
        background:white;
        display:flex;
        flex-direction:column;
        flex-direction: column;
        align-items: center;
    }
    input{
        width:40%;
        height:15%;
        text-align:center;
        margin:10px;
        outline:none;
        border:5px solid rgb(34, 150, 185);

    }
    button{
        margin:10px;
        border:5px solid rgb(34, 150, 185);
        outline:none;
        width:40%;
        height:15%;
        border-radius:25%;
        cursor:pointer;
    }
    footer{
        height:10%
    }
`


export default Div