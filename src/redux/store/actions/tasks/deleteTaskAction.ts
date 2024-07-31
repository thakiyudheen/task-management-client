import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_client } from "../../../../axios";
import { auth } from "../../../../constand/endpoints";
import { AxiosError } from "axios";

export const deleteTaskAction = createAsyncThunk( 
    'user/delete-task',
    async ( data:any,{ rejectWithValue }) => {
        try {
            console.log(data)
            const response = await api_client.delete(`${auth}/deleteTask`,
            {params:{userId:data}}
            )
            
            if(response.data.success) {
                console.log('the delet', response);
                
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