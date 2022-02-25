import styled from "styled-components";

export const Container = styled.div<{ open: boolean }>`
    @keyframes up {
        0% {margin-top:-7px;}
        33%{margin-top:-15px;}
        66%{margin-top:-7px;}
        100%{margin-top:0;}
    }
    height: auto;
    padding: 10px 20px;
    width:100%;
    display:flex;
    align-items:center;
    background-color: #FFF;
    transition: all ease .5s;
    position:relative;

    .menu{
        padding:15px;
        width:100%;
        overflow-X:auto;
        display:flex;
        transition: all ease .5s;
        height: auto;
       
        .menuItems{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:100%;
            overflow-x:auto;
            overflow-y:hidden;
            flex-wrap:nowrap;
            height: auto;
            
            &::-webkit-scrollbar {
                height: 3px;             
                }

                &::-webkit-scrollbar-track {
                background: #0063d1;      
                }

                &::-webkit-scrollbar-thumb {
                background-color: #0063d1;    
                border-radius: 20px;       
                border: 3px solid #0063d1; 
                }
            .view{
                display: none;
            }
            .item{
                display:flex;
                align-items:center;
                color:#666;
                cursor:default;
                min-width:150px;

                &:hover{
                    color:#0063d1;
                }
                &:hover{
                    i{
                        animation: up .7s ;
                    }
                }
                i{
                    font-size:28px;
                    margin-right:10px;
                    transition:.2s;
                    
                }
                p{
                    font-size:13px;
                    line-height:17px;
                    margin-left:10px;
                }
            }
        }
    }

    @media(max-width:1025px){
        padding: 0;
        z-index:999;
        align-items:start;
        height: auto;
        overflow-y:auto;
        background-color: rgba(0,0,0,0.9);
        width: 80vw;
        position: absolute;
        top: 0;
        
        .menu{
            height: auto;
            padding: 0;
            display:${props => props.open ? 'flex' : 'none'};
            overflow-y:auto;
            
      
        .menuItems{
            display:flex;
            justify-content:center;
            flex-direction:column;
            align-items:center;
            overflow-x:hidden;
            overflow-y:hidden;
            flex-wrap:nowrap;
            
            padding: 30px 0 10px 0;
            overflow-y:auto;

            li{
                width: 100%;
                padding:5px 70px;
                text-align: center;
            }
            .view{
                display: block;
            }
            .item{
                display:flex;
                justify-content: space-between;
                color:#FFF;
                cursor:default;
                width:100%;
                margin: 0;
                margin-bottom: 10px;
                border-bottom: 1px solid #FFF;
                &:hover i{animation:none;}
               

                i{
                    font-size:28px;
                    margin-right:20px;
                    transition:.2s;
                    
                }
                p{
                    font-size:20px;
                    line-height:17px;
                    margin:0px;
                    padding-bottom: 10px;
                    text-align: center;
                }
            }
        }
    }
}

@media (max-width:770px) {
    .menuItems{
        width:100% !important;
    }
    
}
@media (max-width:450px) {
    .menuItems{
        li{
        width: 100%;
        padding:5px 20px;
        text-align: center;

        .item .title{
            font-size:14px;
            line-height:17px;
            margin:0px;
            padding-bottom: 10px;
            text-align: center;
        }
    }
    }
   
}
`