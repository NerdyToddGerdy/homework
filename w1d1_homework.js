//**TERMS**//

// The difference between interpolation and concatenation is that concatenationis adding 2 or more strings together while interpolation is adding variables to the strings.

// concatenation example
console.log('happy ' + 'happy ' + 'joy ' + 'joy');

//interpolation example
var bread = 'toast';
console.log('powdered' + " " + bread + " " + 'man!!!!');

//DRY
// DRY stands for Don't Repeat Yourself.  Repeting yourself can be a huge time waister.  Loops are a great tool to help prevent repetition.

//**BOOLEAN EXPRESSIONS**//

var a = 4;
var b = 53;
var c = 57;
var d = 16;
var e = 'Kevin'

console.log(a < b);
console.log(c > d);
console.log('Name' == "Name");
console.log(a + b == c);
console.log(a * a == d);
console.log(e == 'Kevin');
console.log(48 == '48');

//**WHILE LOOPS**//

//the while loop is an infinite loop because the there is nothing to make the 'true' into a 'false'.

//**INFINITE LOOP II**//

//This is not an infinite loop due to the fact that the loop finishes by turning runProgram to false;  It is a catch 22 though, in the fact that if you don't run the program that tells you not to run the program, it won't tell you not to run the program. If you do run the program it will then tell you to not run the program.

//**READING CODE**//

// It should come out as AAAAAAAAAAAAAAAAAAAA (20 A's)

var letters = "A";
var i = 0;

while (i < 20) {
    letters += "A";
    i++;
}

console.log(letters);

// The code gave 21 A's instead of 20 because I didn't account for the 0

//**FOR LOOPS**//

//For Loop I
for (var i=0; i<1000; i++) {
  console.log(i);
}

//For loop control panel
  // The first part of the control panel is: (var i=0) the initial condition
  // The second part of the control panel is: (i<100) while condition
  //The third part of the control panel is: (i++) increment

//For loop in reverse
  for (var i = 999; i >= 0; i--) {
    console.log(i);
  }

for (var i = 1; i<= 10; i++) {
  console.log('The value of i is: ' + i + ' of 10');
}

//interation

var StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (var i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]);
}

for (var i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i] + ' has the value of' + i);
}

for (var i = 0; i < StarWars.length; i += 2) {
  console.log(StarWars[i]);
}

//**TERMINAL PRACTICE**//

// *PART I* //

//mkdir galaxy_far_far_away
//cd galaxy_far_far_away
//mkdir death_star tatooine
//cd death_star
//touch darth_vader.txt princess_leia.txt storm_trooper.txt
//cd ../tatooine
// touch luke.txt ben_kenobi.txt
// mkdir millenium_falcon
// cd millenium_falcon
// touch han_solo.txt chewbacca.txt

// *PART II* //

// cd ..
// mv ben_kenobi.txt obi_wan.txt

// *PART III* //

// cp ../death_star/storm_trooper.txt ../tatooine/

// *PART IV* //

// mv luke.txt obi_wan.txt millenium_falcon/
// mv millenium_falcon/ ..
// cd ..
// mv millenium_falcon death_star
// cd death_star
// mv princess_leia.txt millenium_falcon

// *PART V* //

// cd millenium_falcon
// rm obi_wan.txt

// *PART VI* //

// cd ../..
// mkdir yavin_4
// cd death_star
// mv millenium_falcon ../yavin_4
// cd yavin_4
// mkdir x_wing
// mv millenium_falcon/princess_leia.txt ..
// mv millenium_falcon/luke.txt x_wing
// mv millenium_falcon/ x_wing/ ..
// cd ..
// cd death_star
// mkdir tie_fighter_1.txt tie_fighter_2.txt tie_fighter_3.txt
// mv darth_vader.txt tie_fighter_1
// cp storm_trooper.txt tie_fighter_2
// cp storm_trooper.txt tie_fighter_3
// mv tie_fighter_3 tie_fighter_2 tie_fighter_1 ..

//Shits about to go down in galaxy_far_far_away

// *PART VII* //

// rm tie_fighter_2 tie_fighter_3

// *PART VIII* //

// touch x_wing/the_force.txt
// rm -r death_star
// mv x_wing/ millenium_falcon/ yavin_4/
// cd yavin_4
// touch streamers_and_blue_milk.txt

//**LEARING BY MAKING MISTAKES**//

// I learned why I was jumping at the bit to help others get through the afternoon lab.  I wanted to use what I recently learned to help me retain the information.  cool!

//**GET TO KNOW SLACK**//

//I learned that slack has a lot of Commands.  I also learned that slackbot is a very strong bot with many more options than I thought

// cmnd T is going to be very useful with the amount of conversations I have with classmates.
