// taken from: https://github.com/wholepixel/solving-sol/blob/master/instructions.json
const drawings = {
  "011" : {
    "title" : "Wall Drawing #11 (1969)",
    "description" : "A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed."
  },
  "016" : {
    "title" : "Wall Drawing #16 (1969)",
    "description" : "Bands of lines 12 inches (30 cm) wide, in three directions (vertical, horizontal, diagonal right) intersecting."
  },
  "017" : {
    "title" : "Wall Drawing #17 (1969)",
    "description" : "Four-part drawing with a different line direction in each part."
  },
  "045" : {
    "title" : "Wall Drawing #45 (1970)",
    "description" : "Straight lines 10\" (25 cm) long, not touching, covering the wall evenly."
  },
  "046" : {
    "title" : "Wall Drawing #46 (1970)",
    "description" : "Vertical lines, not straight, not touching, covering the wall evenly."
  },
  "056" : {
    "title" : "Wall Drawing #56 (1970)",
    "description" : "A square is divided horizontally and vertically into four equal parts, each with lines in four directions superimposed progressively."
  },
  "065" : {
    "title" : "Wall Drawing #65 (1971)",
    "description" : "Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall."
  },
  "085" : {
    "title" : "Wall Drawing #85 (1971)",
    "description" : "A wall is divided into four horizontal parts. In the top row are four equal divisions, each with lines in a different direction. In the second row, six double combinations; in the third row, four triple combinations; in the bottom row, all four combinations superimposed."
  },
  "086" : {
    "title" : "Wall Drawing #86 (1971)",
    "description" : "Ten thousand lines about 10 inches (25 cm) long, covering the wall evenly."
  },
  "087" : {
    "title" : "Wall Drawing #87 (1971)",
    "description" : "A square divided horizontally and vertically into four equal parts, each with lines and colors in four directions superimposed progressively."
  },
  "088" : {
    "title" : "Wall Drawing #88 (1971)",
    "description" : "A 6-inch (15 cm) grid covering the wall. Within each square, not straight lines in either of four directions. Only one direction in each square but as many as desired, and at least one line in each square."
  },
  "091" : {
    "title" : "Wall Drawing #91 (1971)",
    "description" : "A six-inch (15 cm) grid covering the wall. Within each square, not straight lines from side to side, using red, yellow and blue pencils. Each square contains at least one line of each color."
  },
  "097" : {
    "title" : "Wall Drawing #97 (1971)",
    "description": "Within an 80 inch (200cm) square, 10,000 straight lines. Next to it is an 80 inch (200 cm) square with 10,000 not straight lines."
  },
  "118" : {
    "title" : "Wall Drawing #118 (1971)",
    "description" : "On a wall surface, any continuous stretch of wall, using a hard pencil, place fifty points at random. The points should be evenly distributed over the area of the wall. All of the points should be connected by straight lines."
  },
  "122" : {
    "title" : "Wall Drawing #122 (1972)",
    "description" : "All combinations of two lines crossing, placed at random, using arcs from corners and sides, straight, not straight and broken lines."
  },
  "130" : {
    "title" : "Wall Drawing #130 (1972)",
    "description" : "Grid and arcs from four corners."
  },
  "132" : {
    "title" : "Wall Drawing #132 (1972)",
    "description" : "A 36 in. (90 cm) grid covering the wall. All two-part combinations of arcs from corners and sides, straight and not straight lines, systematically."
  },
  "146" : {
    "title" : "Wall Drawing #146 (1972)",
    "description" : "All two-part combinations of blue arcs from corners and sides, and blue straight, not straight, and broken lines."
  },
  "164" : {
    "title" : "Wall Drawing #164 (1973)",
    "description" : "A black outlined square with a red horizontal line centered on the axis between the midpoint of the left side and the midpoint of the right side and a red diagonal line centered on the axis between the lower left and upper right corners."
  },
  "232" : {
    "title" : "Wall Drawing #232 (1975)",
    "description" : "A square, each side of which is equal to a tenth of the total length of three lines, the first of which is drawn from a point halfway between the center of the wall and a point halfway between the center of the wall and the upper left corner and the midpoint of the left side to a point halfway between the center of the wall and a point halfway between the center of the wall and the midpoint of the bottom side; the second line is drawn from a point halfway between the start of the first line and a point halfway between the center of the wall and the upper right corner and the midpoint of the top side to the start of the first line; the third line is drawn from a point halfway between a point equidistant from the end of the first line, the start of the second line and a point halfway between a point halfway between the center of the wall and the midpoint of the right side and a point halfway between the center of the wall and the upper right corner and the midpoint of the top side to the point where the first line starts and the second line ends; the right side is located on the axis of, and equidistant from two points, the first of which is located at a point halfway between a point halfway between the center of the wall and the midpoint of the right side and the lower right corner to a point halfway between a point halfway between the midpoint of the top side and the upper right corner and the start of the third line."
  },
  "273" : {
    "title" : "Wall Drawing #273 (1975)",
    "description" : "Lines to points on a grid. A six-inch (15 cm) grid covering the wall. Lines from the corners, sides, and center of the walls to random points on the grid. Composite (seventh wall): red lines from the midpoints of four sides, blue lines from four corners, yellow lines from the center."
  },
  "289" : {
    "title" : "Wall Drawing #289 (1976)",
    "description" : "A six-inch (15cm) grid covering each of the four black walls. White lines to points on the grid.\n1st wall: 24 lines from the center;\n2nd wall: 12 lines from the midpoint of each of the sides;\n3rd wall: 12 lines from each corner;\n4th wall: 24 lines from the center, 12 lines from the midpoint of each of the sides, 12 lines from each corner."
  },
  "295" : {
    "title" : "Wall Drawing #295 (1976)",
    "description": "Six white geometric figures (outlines) superimposed on a black wall."
  },
  "328" : {
    "title" : "Wall Drawing #328 (1980)",
    "description" : "On a black wall, a white circle within which are white vertical parallel lines, and a white parallelogram within which are white horizontal parallel lines. The vertical lines within the circle do not enter the parallelogram, and the horizontal lines within the parallelogram do not enter the circle."
  },
  "335" : {
    "title" : "Wall Drawing #335 (1980)",
    "description" : "On four black walls, white vertical parallel lines, and in the center of the walls, eight geometric figures (including cross, X) within which are white horizontal parallel lines. The vertical lines do not enter the figures."
  },
  "340" : {
    "title" : "Wall Drawing #340 (1980)",
    "description" : "Six-part drawing. The wall is divided horizontally and vertically into six equal parts. 1st part: On red, blue horizontal parallel lines, and in the center, a circle within which are yellow vertical parallel lines; 2nd part: On yellow, red horizontal parallel lines, and in the center, a square within which are blue vertical parallel lines; 3rd part: On blue, yellow horizontal parallel lines, and in the center, a triangle within which are red vertical parallel lines; 4th part: On red, yellow horizontal parallel lines, and in the center, a rectangle within which are blue vertical parallel lines; 5th part: On yellow, blue horizontal parallel lines, and in the center, a trapezoid within which are red vertical parallel lines; 6th part: On blue, red horizontal parallel lines, and in the center, a parallelogram within which are yellow vertical parallel lines. The horizontal lines do not enter the figures."
  },
  "366" : {
    "title" : "Wall Drawing #366 (1982)",
    "description" : "Black arcs using the height of the wall as a radius, and black arcs using the midpoints of the wall as a radius. The arcs are filled in solid and drawn in India ink."
  },
  "391" : {
    "title" : "Wall Drawing #391 (1983)",
    "description": "Two-part drawing. The two walls are each divided horizontally and vertically into four equal parts. First wall: 12-inch (30 cm) bands of lines in four directions, one direction in each part, drawn in black India ink. Second wall: Same, but with four colors drawn in India ink and color ink washes."
  },
  "392" : {
    "title" : "Wall Drawing #392 (1983)",
    "description": "A 12\" (30 cm) grid covering the black wall. Within each 12\" (30 cm) square, a vertical, horizontal, diagonal right or diagonal left line bisecting the square. All squares are filled. (The direction of the line in each square is determined by the drafter)"
  },
  "396" : {
    "title" : "Wall Drawing #396 (1983)",
    "description": "A black five-pointed star, a yellow six-pointed star, a red seven-pointed star, and a blue eight-pointed star, drawn in color and India ink washes."
  },
  "541" : {
    "title" : "Wall Drawing #541 (1987)",
    "description": "On each of four walls, a tilted form with color ink washes superimposed.\n\nColor ink wash\n\nA First wall: The background is GG -Left plane: YRY; right plane: YBY; bottom plane: BRB\n\nB Second wall: The background is YY. Left plane: GBG; right plane: RGG; top plane: YGR\n\nC third wall: The background is RR. Left plane: GBB; right plane: RYG; bottom plane: GGY;\n\nD The background is BB. Left plane: GYB. right plane: GRR; top plane: YGY\n\nKey: Red = R; Yellow = Y; Blue = B; Gray = G"
  },
  "614" : {
    "title" : "Wall Drawing #614 (1989)",
    "description": "Rectangles formed by 3-inch (8 cm) wide India ink bands, meeting at right angles."
  },
  "630" : {
    "title" : "Wall Drawing #630 (1990)",
    "description": "A wall is divided horizontally into two equal parts. Top: alternating horizontal black and white 8-inch (20 cm) bands. Bottom: alternating vertical black and white 8-inch (20 cm) bands."
  },
  "797" : {
    "title" : "Wall Drawing #797 (1995)",
    "description": "The first drafter has a black marker and makes an irregular horizontal line near the top of the wall. Then the second drafter tries to copy it (without touching it) using a red marker. The third drafter does the same, using a yellow marker. The fourth drafter does the same using a blue marker. Then the second drafter followed by the third and fourth copies the last line drawn until the bottom of the wall is reached."
  },
  "852" : {
    "title" : "Wall Drawing #852 (1998)",
    "description": "A wall divided from the upper left to the lower right by a curvy line; left: glossy yellow; right: glossy purple."
  },
  "853" : {
    "title" : "Wall Drawing #853 (1998)",
    "description": "A wall bordered and divided vertically into two parts by a flat black band. Left part: a square is divided vertically by a curvy line. Left: glossy red; right: glossy green; Right part: a square is divided horizontally by a curvy line. Top: glossy blue; bottom: glossy orange."
  },
  "959" : {
    "title" : "Wall Drawing #959 (2001)",
    "description": "Uneven bands from the upper right corner."
  },
  "1180" : {
    "title" : "Wall Drawing #1180 (2005)",
    "description": "Within a circle, draw 10,000 black straight lines and 10,000 black not straight lines. All lines are randomly spaced and equally distributed."
  }
};

function randomDrawing() {
  const keys = Object.keys(drawings);
  const rndIndex = Math.floor(
    Math.random() * keys.length
  );
  const rndKey = keys[rndIndex];
  return drawings[rndKey];
}


const drawing = randomDrawing();
const title = drawing.title;
const description = drawing.description;

document.querySelector(".title").innerText = title;
document.querySelector(".description").innerText = description;
console.log("Heya");