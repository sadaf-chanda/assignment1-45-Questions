// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(size = "large", message = "I love Pakistan") {
    console.log(`You ordered a ${size} shirt with the message: ${message}`);
}
make_shirt1();
make_shirt1("medium");
make_shirt1("small", "Pakistan is awesome!");
