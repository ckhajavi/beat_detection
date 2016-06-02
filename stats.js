//root mean square function
function squareAndSum(arr){
        var sum = 0;
        var element;
        for (i = 0; i<arr.length; ++i){
            element = Math.pow(arr[i],2);
            element = Math.sqrt(element);
            sum = sum + element;

    	}
        return sum/arr.length;
    }

//maximum function in array
Array.max = function( array ){
    return Math.max.apply( Math, array );
};


//calculates the average (doesn't take negatives into account )  
function average(arr){
        var sum = 0;
        for( i = 0; i < arr.length; ++i){
            sum = sum + arr[i];
        }
        return sum/arr.length;
    }

//calculates variance
function variance(average, arr){
        var variance = 0;
        var diff;
        for(i =0; i < arr.length; ++i){
            diff = arr[i] - average;
            variance = variance + Math.pow(diff, 2);

        }
        return variance/arr.length;

    }