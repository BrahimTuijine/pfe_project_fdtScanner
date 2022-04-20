<?php

namespace App\Http\Controllers;

use App\Models\dailyFdtValue;
use App\Http\Requests\UpdatedailyFdtValueRequest;
use Illuminate\Http\Request;

class DailyFdtValueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return dailyFdtValue::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoredailyFdtValueRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "fdtId" => "required",
            "value" => "required ",
        ]);

        return dailyFdtValue::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\dailyFdtValue  $dailyFdtValue
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return dailyFdtValue::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatedailyFdtValueRequest  $request
     * @param  \App\Models\dailyFdtValue  $dailyFdtValue
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatedailyFdtValueRequest $request, dailyFdtValue $dailyFdtValue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\dailyFdtValue  $dailyFdtValue
     * @return \Illuminate\Http\Response
     */
    public function destroy(dailyFdtValue $dailyFdtValue)
    {
        //
    }
}
