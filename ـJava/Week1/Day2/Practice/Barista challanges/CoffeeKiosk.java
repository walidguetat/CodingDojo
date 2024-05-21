public CoffeeKiosk() {
    menu = new ArrayList<>();
    order = new ArrayList<>();
}

public void addMenuItem(String name, double price) {
    int index = menu.size();
    Item newItem = new Item(name, price, index);
    menu.add(newItem);
}

public void displayMenu() {
    System.out.println("Menu:");
    for (Item item : menu) {
        System.out.println(item);
    }
}