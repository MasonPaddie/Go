# GO!
Go game initially created for General Assembly project 1

# How To Play GO!
Written by: Mason Paddie

## A Little Background
Go is a chinese board game that was invented over two millenium ago. The goal of the game is to surround the most amount of territory on the board. To do this, one must play their pieces so that they can form groups and encircle their oppenents. The logic of the game is more simple and easier to understand than chess, but the vast amount of options makes it more difficult to recognize patterns and predict moves. As an example of the underlying complexity in the simplicity of go, computers were able to beat world champions of checkers in 1992 and world champions of chess in 1997. It was not until 2016 that a computer was able to beat world chamipons of go. 

## The Board
Go is played on a 19x19 board that initally has no pieces on it. 

![Go Board](https://user-images.githubusercontent.com/92054622/180579654-74ede43b-5f70-4dc8-8af5-bd452c47eb91.png) 

## The First Move
Pieces can be played on any of the intersections and the game always starts with black.

![Go Board](https://user-images.githubusercontent.com/92054622/180584034-2c3ba32e-89a6-42dc-9f9d-efc9a84fe5fb.png)


## Liberties 
Liberties are any intersections directly adjacent to a piece. Pieces are safe as long as they have one or more liberties. In the picture below, the green dots represent liberties. White has a total of 3 liberties, and black has a total of 6 liberties. 

![goBoardLiberties](https://user-images.githubusercontent.com/92054622/180584128-094d7c3a-dea1-4606-ab85-62019a8e5f24.png)

## Groups
Groups are formed when pieces of the same color are placed directly adjacent to each other. By forming groups, you increase the number of liberties that need to be covered in order for your pieces to be captured. A singular piece from a group cannot be captured, the entire group must be encircled in order for the group to be captured. The picture below shows black groups traced in red and white groups traced in green. 

If white were to cover the intersections colored green, the black group that is encircled would be captured and removed from the board. Black can capture the white group by playing on the intersections colored red. 

![Go Board](https://user-images.githubusercontent.com/92054622/180584425-aabb841b-0b8d-4d79-bcde-41626b971989.png)

## Capturing
If a group consists of no liberties, the group is captured and removed from the board. In the picture below, white can capture black by playing on the green intersection. 

![Go Board](https://user-images.githubusercontent.com/92054622/180584553-dc86b951-1801-474b-a94c-85746260c087.png)

If white plays on the green intersection, the black piece is removed from the board. The intersection colored red has no liberties for black, so black cannot play on this intersection. 

![Go Board](https://user-images.githubusercontent.com/92054622/180584622-bc29a192-884b-4539-bc20-3f1ccc69d65e.png)

Two moves later and black has put white in danger of being captured. Although the green intersection has white pieces on every adjacent intersection, black can capture white by playing on this intersection. Since black can capture white, the intersection is a possible move for black. 

![Go Board](https://user-images.githubusercontent.com/92054622/180584727-b5b492f9-4c81-427a-b661-998921dc39af.png)

Black plays on this intersection and captures the white piece. However, the black piece that was recently played has only one intersection. If white were to capture this piece, it would create a endless capture cycle on the two pieces. Because of this, it is a rule that you cannot capture a piece if it was just played and captured a piece. This means that the red intersection is not a possible move for white on this turn. 

![Go Board](https://user-images.githubusercontent.com/92054622/180584867-20b6fe81-24a5-4018-bddf-0e1825ffc537.png)

In order for black to protect this piece, they must place a piece on the center intersection on form a group. If black does not do this, white can capture on the next move. 

![goBoardBlackSafe](https://user-images.githubusercontent.com/92054622/180584959-876ab08a-362a-436a-b042-7eed7b52166b.png)

## Scoring

The game ends when both players pass a turn. This means that both players agree there are no longer any good moves for both sides and a final score should be computed. In casual games of go, scoring is time consuming and often not done; the players visually mark off their terrirtory and come to an agreement on who has more, and thus, the winner. In professional games as well as games played on a computer, scoring is calculated. 

There are multiple scoring methods and which one you use depends on where in the world you are. In english speaking countries, area scoring is typically used, and luckily it is easier to code. This score is computed by adding the number of pieces that you captured to the number of liberties you currently have on the board. An important aspect of scoring is that white always starts with a 0.5 point advantage since black always goes first. What this equates to is that if there is a tie, white wins. There are never draws in a game of go. 

