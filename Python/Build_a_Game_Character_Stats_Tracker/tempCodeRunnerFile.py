class GameCharacter:

    _base_stats = {
        'health': 100,
        'mana':50,
        'level':1
    }
    
    def __init__(self,name):
        self._name = name;
        self._health = GameCharacter._base_stats['health']
        self._mana = GameCharacter._base_stats['mana']
        self._level = GameCharacter._base_stats['level']

    def __str__(self):
        return f'''Name: {self.name}
Level: {self.level}
Health: {self.health}
Mana: {self.mana}'''
    
    #NAME
    @property
    def name(self):
        return self._name

    #HEALTH
    @property
    def health(self):
        return self._health

    @health.setter
    def health(self,new_health):
        if new_health <= 0:
            self._health = 0
        elif new_health >= 100:
            self._health = 100
        else:
            self._health = new_health

    #MANA
    @property
    def mana(self):
        return self._mana

    @mana.setter
    def mana(self,new_mana):
        if new_mana <= 0:
            self._mana = 0
        elif new_mana >= 50:
            self._mana = 50
        else:
            self._mana = new_mana

    #LEVEL
    @property
    def level(self):
        return self._level

    def level_up(self):
        self._level += 1
        self.health = 100
        self.mana =50
        print(f"{self.name} leveled up to {self.level}!")

    
    


hero = GameCharacter('Kratos') # Creates a new character named Kratos
print(hero)  # Displays the character's stats

hero.health -= 30  # Decreases health by 30
print(hero)  # Displays the character's stats
hero.mana -= 10    # Decreases mana by 10
print(hero)  # Displays the updated stats

hero.level_up()  # Levels up the character
#print(hero)  # Displays the stats after leveling up
