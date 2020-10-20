# """
# じゃんけんゲーム作成問題
# 以下に user_input という変数があります。これはターミナル(コマンドプロンプト)からの入力を受け取ることができます。
# 受け取った値をもとに勝ち、負けの判定をするじゃんけんゲームを作成してください

# ただし、出力の言葉は以下を用いること
# 入力者が
# 勝ち -> 「あなたの勝ち」と出力
# 負け -> 「あなたの負け」と出力
# あいこ -> 「引き分け」と出力

# 出力フォーマット例
# ---
# あなた：グー
# コンピュータ：パー
# 結果：あなたの負け
# ---

# 例１
# 【入力】
# グー・チョキ・パー のいずれかを入力してください：グー

# 【出力】
# あなた：グー
# コンピュータ：パー
# 結果：あなたの負け


# 【補足】
# ここでは、「import」というものを用いて pythonに標準機能である 「random」というモジュール（ライブラリ）を使用します。
# リストの中のものをランダムに出力してくれる便利なモジュールです
# """

import random
user_input = input('グー・チョキ・パー のいずれかを入力してください：')
com_choice = random.choice(["グー", "チョキ", "パー"])
results = ["勝ち", "負け", "あいこ"]
result = ""

if user_input == com_choice:
    result = results[2]

else:
    if user_input == "グー":
        if com_choice == "チョキ":
            result = results[0]
        else:
            result = results[1]
    elif user_input == "パー":
        if com_choice == "グー":
            result = results[0]
        else:
            result = results[1]
    elif user_input == "チョキ":
        if com_choice == "パー":
            result = results[0]
        else:
            result = results[1]
    else:
        print("入力を確認してください")
print("あなた:" + user_input)
print("コンピュータ:" + com_choice)
print("結果:" + result)
