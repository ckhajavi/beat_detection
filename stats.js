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

Array.max = function( array ){
    return Math.max.apply( Math, array );
};


    
function average(arr){
        var sum = 0;
        for( i = 0; i < arr.length; ++i){
            sum = sum + arr[i];
        }
        return sum/arr.length;
    }

    function variance(average, arr){
        var variance = 0;
        var diff;
        for(i =0; i < arr.length; ++i){
            diff = arr[i] - average;
            variance = variance + Math.pow(diff, 2);

        }
        return variance/arr.length;

    }