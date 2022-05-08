import styled from "styled-components";

export const Container = styled.header`
    background-color: #0063d1;
    height: auto;
    color:#FFF;
`
export const InfoArea = styled.div`
    height:41px;
    max-width: 1320px;
    margin:auto;
    display:flex;
    align-items:center;
    font-size:12px;
   
    .area{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 0 20px;

        .info{
            display:flex;

            ul{
                margin-left:10px;
                padding-left:10px;
                display:flex;
                justify-content:space-between;
                align-items:center;

                li:nth-child(3){
                    display:flex;
                    &:hover{
                        opacity:1;
                    }
                    a:hover{
                        opacity:.8;
                    }
                    span{
                        margin:0 5px;
                    }
                }
                li{
                    margin-right:20px;
                    text-align:center;

                    &:hover{
                        opacity:.8;
                    }
                    
                   
                    a{
                        display:flex;
                        align-items:center;
                    }

                    i{
                        margin-right:10px;
                        font-size:18px;
                        
                    }
                }
            }
        }
    }
    @media(max-width:768px){
        
        .contact{
            display: none;
        }
        
    }
`

export const SearchArea = styled.div`
    height:99px;
    max-width: 1320px;
    margin:auto;
    display:flex;
    align-items:center;

    .area{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .menuToggle{
            display: none;
        }
        img{
            height:50px;
        }

        .input, .cart, .details, .phone{
            display:flex;
            align-items:center;

            i{
                font-size:28px;
                margin: 0 10px;
                
            }
        }
        .cart, .phone, .heart{
            &:hover{
                opacity:.8;
            }
        }
        .phone, .cart{
            cursor:pointer;
            p{
                span{
                    font-size:11px;
                }
                b{
                    font-size:14px;
                }
            }
        }
        
        .heart{
            margin: 0 15px;
            border-left:1px solid #ccc;
            border-right:1px solid #ccc;
        }
        
    }
    @media(max-width:1024px){
        .area {
            img{
            height:40px;
        }
        .input{
            padding: 5px;
        }
    }
    .close{
        display: none;
    }
    .heart{
        margin: 0 !important;
        border:none !important;
    }
   
}
@media (max-width:800px) {
        .area .menuToggle{
            display: block;
        }
    }
`