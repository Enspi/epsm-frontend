import openpyxl, json

files = {
    "ca_da": {"is_oil": True, "is_hourly": False},
    "ca_hr": {"is_oil": True, "is_hourly": True},
    "mn_da": {"is_oil": True, "is_hourly": False},
    "mn_hr": {"is_oil": True, "is_hourly": True},
    "tx_da": {"is_oil": False, "is_hourly": False},
    "tx_hr": {"is_oil": False, "is_hourly": True},
    "ny_da": {"is_oil": True, "is_hourly": False},
    "ny_hr": {"is_oil": True, "is_hourly": True},
}


for file_name, options in files.items():
    file_path = f"E:\shams\{file_name}.xlsx"
    is_oil = options.get("is_oil")
    is_hourly = options.get('is_hourly')


    wb = openpyxl.load_workbook(file_path)
    sheet = wb.active

    data = {
        "col": [],
        "ng": [],
        "nuc": [],
        "wat": [],
        "sun": [],
        "wnd": [],
        "oth": []
    }

    if is_oil:
        data["oil"] = []

    for row in list(sheet.rows)[1:]:
        
        indexes = dict(
        col = 2,
        ng = 3,
        nuc = 4,
        wat = 5,
        sun = 6,
        wnd = 7,
        oth = 8,
        )

        if is_oil:
            indexes["oil"] = 5
            indexes["wat"] = 6
            indexes["sun"] = 7
            indexes["wnd"] = 8
            indexes["oth"] = 9


        l_row = list(row)
        for key, val in indexes.items():
            new_object = {"NG:" + key.upper(): l_row[val].value}

            if is_hourly:
                new_object["time"] = str(l_row[1].value)
            
            else:
                new_object["date"] = str(l_row[1].value).replace(' 00:00:00', '')

            data[key].append(new_object)

    with open(rf'E:\shams\exports\{file_name}.json', 'w') as f:
        json.dump(data, f)