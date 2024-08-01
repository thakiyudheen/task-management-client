

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_client } from "../../../../axios";
import { auth } from "../../../../constand/endpoints";
import { config } from "../../../../common/configuration";
import { AxiosError } from "axios";

export const logoutAction = createAsyncThunk( 
    'user/logout-user',
    async ( _,{ rejectWithValue }) => {
        try {

            const response = await api_client.delete(`${auth}/logout`,
            config
            )

            if(response.data.success) {

                return response.data ;

            } else {
                return rejectWithValue(response.data)
            }


        } catch ( error : any ) {
            const e : any = error as AxiosError;

            throw new Error(
                e.response?.data.error || e.response?.data.message || e.message
            );
            
        }
    }
)