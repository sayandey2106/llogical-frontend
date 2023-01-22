export const  createLink = async () =>{
   
    // const signUpObj = {signup }
    
    console.warn("calling create new link");
    // console.warn(newType);
 const response = await fetch("https://api.zoom.us/v2/users/support@llogical.com/meetings", {
    method :"POST",
  headers : {
    "content-type": "application/json",
    "Authorization":"Bearer eyJhbGciOiJIUzUxMiIsInYiOiIyLjAiLCJraWQiOiJiNWYwNGU2Ny02MjE2LTQ0MzAtOWI4YS1hNDBjYzI0OTQyNzAifQ.eyJ2ZXIiOjgsImF1aWQiOiI5OWY3OWY1MTU3ZGJiNTBmOTYyOGZkYTgyYTdjM2I3YSIsImNvZGUiOiJGWXJHSjZwbFBlbFNkWXk3ZFRJUW5POXBMRzF6bkR5NmciLCJpc3MiOiJ6bTpjaWQ6R1Q4X2FJNUtTNm1QaGRMMXNSNUNPZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjoxLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiI2TGxld0dFQVJHaW9DYmFIUUlKajZBIiwibmJmIjoxNjc0MTA1NTA3LCJleHAiOjE2NzQxMDkxMDcsImlhdCI6MTY3NDEwNTUwNywiYWlkIjoicDI2Y2dKcHhRdWFxU1VDemg4MEFnZyIsImp0aSI6IjBhMmE0MzZhLWRjNDgtNGJiOC1hOTQxLTI4ZjJmNTgxMjQ1YSJ9.AeNrCxWy_rYBSYwBiOwpK2xARSbsHnr5mcmrqgEhRJJyuIzhOmdjCiHkFU9kDbp2cWsimjkrpui8974yK-SKCw",
    "Cookie":"_zm_mtk_guid=95e11faf0cbf49febe46cb6f2efd738a",
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  },
body : JSON.stringify({
    
        topic:"test 5",
        type:2,
      start_time: "2023-01-18T12:10:10Z",
      duration:"3",
    settings:{
       host_video:true,
       participant_video:true,
       join_before_host:true,
       mute_upon_entry:"true",
       watermark: "true",
       audio: "voip",
       auto_recording: "cloud"
    }  
})

 });

    const data = await response.json();
  
    //   alert(data.message)
    console.log(data)
   
    return (data)
}