import java.util.*;


public class CdqMUEjO{

   public static int candy(int[] arr) {    
   //    int i=0;
   //   int left=-1;
      int n=arr.length;
     // int right=i+1;
    

      int[] ans=new int[n];
      Arrays.fill(ans,1);
      
      int left=-1;
      
      int right=1;
      
   //   int i=0;
   //  int[] ans=new int[n];
     Arrays.fill(ans,1);


     for(int i=0;i<n-1;i++){
          for(int j=i;j<i+3;j++){

               if(j<i+1 && arr[j]>arr[j+1] ){
               
                    ans[j]=arr[j+1]+1;
               }
              }
               
     }

 for(int i=0;i<n-1;i++){
          for(int j=i+2;j>=i;j--){

               if( arr[j]>arr[j-1] ){
               
                    ans[j]=arr[j-1]+1;
               }
              
               
     }


}

    
     int sum=0;
     for(int p=0;p<n-1;p++){
       if(ans[p]==ans[p+1]){
        sum+=1;

         }
       System.out.println(ans[p]);

         sum+=ans[p];
     }
   System.out.println(ans[n-1]);
     return sum+ans[n-1];

         
    }


   public static void main(String[] args){
     int[] arr={1, 0,3};
    System.out.println(candy(arr));



}
}
