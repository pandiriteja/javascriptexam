function perfectsquare(g){
	let left = 1;
  right = g;
  while(left<=right)
  {
  	let mid = left +Math.floor((right - left)%1);
    if(mid * mid * mid *mid===g)
    {
    	console.log(left,mid,left,mid);
    	return true;
    }
    else if(mid * mid * mid *mid>g)
    {
    	right = mid-1;
    }
    else if(mid * mid * mid *mid<g)
    {
    	left = mid+1;
    }    
  }
  return false;
}

console.log(perfectsquare(625));