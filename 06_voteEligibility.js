var voteEligible = function(age){
    if(age <= 0 || age > 130){
        console.log(`Invalid data : ${age}`);
    } else if(age < 18) {
        console.log(`Not eligible for vote : ${age}`);
    } else{
        console.log(`Eligible for vote : ${age}`);
    }
}


voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);