import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { createContext } from "react";
const TamplateContext = createContext(null);

 export const TamplateProvider = ({children}) =>{


    const theme = createMuiTheme ({
            overrides: {
                MuiDialog:{
                    paperWidthSm:{
                        maxWidth : 'unset',
                    }
                },
                MuiDialogContent:{

                root:{
                    padding: 0,
                    '&:first-child':{
                        paddingTop: 0,
                    }
                }

                },
                MuiTableCell:{
                    root:{
                        borderBottom:'none',
                    }
                }

            }
            
        
    })
    return( 
        <TamplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </TamplateContext.Provider>

    )
}
