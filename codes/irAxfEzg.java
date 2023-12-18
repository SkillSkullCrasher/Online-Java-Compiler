import java.util.*;


public class irAxfEzg{

   public static int candy(int[] arr) {    
       int i=0;
      int left=-1;
      int n=arr.length;
      int right=i+1;
    

      int[] ans=new int[n];
      Arrays.fill(ans,1);

      
      while(i<n-1 && right<n){
         if( left>=0 && arr[i]>arr[left] ){
        
                ans[i]=ans[left]+1;
     // System.out.println(ans[left]);
     // System.out.println(ans[right]);
         // left++;
        //    i++;
        //  right++;

               
        }
         if(left>=0 && right<n && arr[left]<arr[right] ){
        
                ans[i]+=1;
  //    System.out.println(ans[left]);
    //  System.out.println(ans[right]);
      //    left++;
        //    i++;
          //right++;

               
        }
       if(right<n-1){

      
           left++;
            i++;
          right++;
  }

     //  System.out.println(ans[i]);

          }

        //  if(right==n-1){
                if(arr[n-1]>arr[n-2]){
                ans[n-1]+=1;
                }
         //  }


      int sum=0;
      for(int j=0;j<n;j++){
        sum+=ans[j];
     System.out.println(ans[j]);

}
      
     // System.out.println(sum);




     return 0;

         
    }


   public static void main(String[] args){
     int[] arr={1,2,87,87,87,2,1};
    System.out.println(candy(arr));



}

