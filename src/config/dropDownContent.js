import shark_image from "../images/this_is_not_abuse.png";
import dog_and_maths from "../images/dog_and_maths.jpg";

import what_does_it_mean_to_love from "../pdf/What does it mean to love.pdf";
import how_do_you_know_when_youre_ready from "../pdf/How do you know that you're ready.pdf"

export const SHORK_CONTENT = {
    title: "The Blue shark",
    description: [`That's a rather boring name, isn't it?`, ``],
    // sob_story: [
    //     `After all, what's a thing if not the memory that it holds?`,
    //     `It's something to which extreme sentimental attachment is tied. It was a surprise during a time of uncertainty, so ridding it feels like removing a vital piece of me.`,
    //     `But, keeping it also poisons from within; the weight of it, slowing sinking me down into the pits of incessant longing.`,
    //     ` `,
    //     `It's almost comical that such strong attachment still exists.`,
    //     `Oh, by the way, I call it`,
    // ],
    // link_text: "The Shork",
    image_text: "You wish to see me?",
    link_image: shark_image,
    link_file: what_does_it_mean_to_love,
};

export const DOG_CONTENT = {
    title: "The Brown Dog",
    description: [`A mathematical wizard`],
    // sob_story: [
    //     `It's a random dog given to me on a random day.`,
    //     `In a way, it represents the naviety for longing and attachment; when is the right time? Is the person the right person?`,
    //     `Ironically, it's no longer with me`,
    // ],
    // link_text: "Where logic ceases to be",
    image_text: "What a nerd",
    link_image: dog_and_maths,
    link_file: how_do_you_know_when_youre_ready
};
