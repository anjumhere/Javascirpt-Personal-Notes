import tkinter as tk
from tkinter import ttk
import requests

# Fetch order book data
def get_order_book(symbol="BTCUSDT", limit=5):
    url = f"https://api.binance.com/api/v3/depth?symbol={symbol}&limit={limit}"
    response = requests.get(url)
    data = response.json()
    return data

# Calculate imbalance
def calculate_imbalance(order_book):
    bids = order_book['bids']
    asks = order_book['asks']

    total_bid_volume = sum(float(bid[1]) for bid in bids)
    total_ask_volume = sum(float(ask[1]) for ask in asks)

    best_bid = float(bids[0][0])
    best_ask = float(asks[0][0])

    imbalance = total_bid_volume / total_ask_volume if total_ask_volume != 0 else 0

    return {
        "Best Bid": best_bid,
        "Total Bid Volume": total_bid_volume,
        "Best Ask": best_ask,
        "Total Ask Volume": total_ask_volume,
        "Imbalance": round(imbalance, 4)
    }

# Fetch data and update GUI
def fetch_data():
    symbol = symbol_var.get()
    try:
        order_book = get_order_book(symbol)
        result = calculate_imbalance(order_book)
        output_text = "\n".join([f"{key}: {value}" for key, value in result.items()])
        result_label.config(text=output_text)
    except Exception as e:
        result_label.config(text=f"Error fetching data: {e}")

# Auto-refresh every 5 seconds
def auto_update():
    fetch_data()
    root.after(5000, auto_update)  # 5000ms = 5 seconds

# GUI setup
root = tk.Tk()
root.title("Binance Order Book Imbalance")
root.geometry("450x350")
root.configure(bg="#222")

# Dropdown for popular coins
tk.Label(root, text="Select Coin:", bg="#222", fg="white", font=("Arial", 12)).pack(pady=10)
symbol_var = tk.StringVar()
symbol_dropdown = ttk.Combobox(root, textvariable=symbol_var)
symbol_dropdown['values'] = ("BTCUSDT", "ETHUSDT", "BNBUSDT", "ADAUSDT", "XRPUSDT")
symbol_dropdown.current(0)
symbol_dropdown.pack(pady=5)

# Fetch button
fetch_button = ttk.Button(root, text="Get Imbalance", command=fetch_data)
fetch_button.pack(pady=10)

# Result display
result_label = tk.Label(root, text="", bg="#222", fg="white", justify="left", font=("Consolas", 10))
result_label.pack(pady=10)

# Start auto-update
auto_update()

root.mainloop()
