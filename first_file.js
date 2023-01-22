function inRange(n, start, end) { 
    // Add any parameters you need. Good luck!
  
    // if end is null, end becomes start and start becomes 0
    if (end === undefined){
      end = start;
      start = 0;
    }
    // if start is greater than end, switch start and end
    if (end < start){
      return (end < n && n < start);
    }
    // check if n is between start and end
    return (start < n && n < end);
  }