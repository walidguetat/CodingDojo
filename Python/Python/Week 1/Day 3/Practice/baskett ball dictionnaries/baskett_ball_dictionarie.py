

# Challenge 1: Update the Constructor 

class Player:

    new_team1=[]

    def __init__(self,play_one):
        self.name = play_one["name"]
        self.age = play_one["age"]
        self.position = play_one["position"]
        self.team = play_one["team"]
        Player.new_team1.append(self)

    @classmethod
    def team_player(cls):
        for pl in cls.new_team1:
            print (pl.name)

    def display_player(self):
        print(f"Name : {self.name} \nAge : {self.age} \nPosition : {self.position} \nTeam : {self.team} ")
        return self

    



print("\n------------------------------------------\n")

# Challenge 2: Create instances using individual player dictionaries.

player_one1={"name":"kevin Durant","age":34,"position":"small forward","team":"Brooklyn Nets"}

player1=Player(player_one1)
player1.display_player()

print("\n------------------------------------------\n")

player_one2={"name":"Jason Tatum","age":24,"position":"small forward","team":"Boston Czltics"}

player1=Player(player_one2)
player1.display_player()

print("\n------------------------------------------\n")

player_one3={"name":"Kyrie Irving","age":32,"position":"Point Guard","team":"Brooklyn Nets"}

player1=Player(player_one3)
player1.display_player()

print("\n------------------------------------------\n")

# Challenge 3: Make a list of Player instances from a list of dictionaries



player_one1={"name":"Walid guetat","age":20,"position":"milieu","team":"Taraji"}

player1=Player(player_one1)
# player1.add_new_player(player_one1)
# player1.display_list_player(new_team)

Player.team_player()
# bonnus  Next times 







